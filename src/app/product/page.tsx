export default function ProductPage(props: any) {
  const { searchParams } = props;
  console.log(searchParams.price_id);

  return (
    <div>
      <h1>ProductPage</h1>
    </div>
  );
}
