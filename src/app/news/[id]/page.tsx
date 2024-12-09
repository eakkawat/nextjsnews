function NewsDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className='text-2xl font-bold'>News Detail Page</h1>
      <p>News ID: {params.id}</p>
    </>
  );
}
export default NewsDetailPage;
