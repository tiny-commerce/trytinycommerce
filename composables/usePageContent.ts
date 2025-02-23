export default async function usePageContent(page: string) {
  const {data} = await useAsyncData(page + "Content", () => {
    return queryCollection("pages").path('/pages/' + page).first();
  });

  return {
    page: data,
  }
}
