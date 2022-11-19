export default function SupportCard({ cardData }) {
  return (
    <div className="row">
      {cardData.map((data) => (
        <div className="col-md-6 col-sm-12" key={data.id}>
          <div className="supportCard">
            <img src={data.image} alt="" className="heroImage img-fluid" />
            <div className="texts">
              <a href="/">{data.title}</a>
              <span className="icon">{data.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
