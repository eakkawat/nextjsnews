import { DUMMY_NEWS } from '@/dummy-news';

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years: number[], news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvaliableNewsMonths(year: string) {
  return DUMMY_NEWS.reduce((months: number[], news) => {
    const newsYear = new Date(news.date).getFullYear();

    // Get all months for the given year
    if (newsYear.toString() === year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsByYear(year: string) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsByYearAndMonth(year: string, month: string) {
  return DUMMY_NEWS.filter(
    (news) =>
      new Date(news.date).getFullYear() === +year &&
      new Date(news.date).getMonth() === +month
  );
}
