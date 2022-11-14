export default function WatchBounosCard({ cardData }) {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((data) => (
          <div className="col-md-6 col-12" key={data.id}>
            <div className="singleWatchBoounose">
              <h6 className="title">{data.title}</h6>
              <p className="desc">{data.desc}</p>
              <p className="more">Learn more</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
