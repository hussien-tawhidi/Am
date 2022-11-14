export default function AppleS8WatchCard({ cardData }) {
  return (
    <>
      {cardData.map((data) => (
        <div className="apple-s8-poster" key={data.id}>
          <img src={data.imageTop} alt="" className="imageTop" />
          <div className="texts">
            <div className="textbold">
              <p className="miniTitle">{data.miniTitle}</p>
              <h5 className="lgTitle">{data.lgTitle}</h5>
            </div>
            <div className="textThick">
              <p className="Bold">{data.textBold}</p>
              <p className="thick">{data.textThick}</p>
            </div>
          </div>
          <img src={data.imageBottom} alt="" className="imageBottom" />
        </div>
      ))}
    </>
  );
}
