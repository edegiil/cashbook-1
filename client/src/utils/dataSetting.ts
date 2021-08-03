import { getState, setState } from 'src/lib/observer';

import { getTransaction } from 'src/api/transaction';
import { getCalendarStatistics } from 'src/api/calendar';
import { getChartStatistics } from 'src/api/chart';

import { pageState } from 'src/store/page';
import { transactionState } from 'src/store/transaction';
import { calendarDataState } from 'src/store/calendar';
import { statisticsState, CategoryStatisticsType } from 'src/store/statistics';

//util안에 있을 애는 아닌 것 같은데 위치를 못잡겠음

//TODO 함수 위치 변경
export async function setTransactionData(): Promise<any> {
  const { Page } = getState(pageState);
  const pageName = Page.name;
  //TODO에러처리

  if (pageName === 'MainPage') {
    const { success, response } = await getTransaction();
    if (success) setState(transactionState)(response);
  }
  if (pageName === 'CalendarPage') {
    const { success, response } = await getCalendarStatistics();
    if (success) setState(calendarDataState)(response);
  }
  if (pageName === 'ChartPage') {
    const { success, response } = await getChartStatistics();
    if (success) {
      const state = parseCategoryList(response);
      setState(statisticsState)(state);
    }
  }
}

function parseCategoryList(data: { [key: string]: number }) {
  const a = Object.entries(data).sort((a, b) => +a[1] - +b[1]);
  let totalExpenditure = 0;
  const categoryList: CategoryStatisticsType[] = [];

  a.forEach((b) => {
    const [category, expenditure] = b;
    totalExpenditure += Math.abs(expenditure);
    if (Math.abs(expenditure) > 0) {
      categoryList.push({
        category,
        expenditure: Math.abs(expenditure),
      });
    }
  });

  return { totalExpenditure, categoryList };
}
