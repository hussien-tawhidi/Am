export default function HuaweiCardOne({ huaweiCardData }) {
  return (
    <div className="huawieCardOne">
      {huaweiCardData.map((card) => (
        <div className={`container singleCard ${card.direction}`} key={card.id}>
          <img src={card.image} alt="" />
          <div className="text">
            <div className="titleTop">
              <span>{card.newText}</span>
              <span>{card.size}</span>
            </div>
            <h5>{card.title}</h5>
            <p>{card.text}</p>
            <a href="/">{card.learnMore}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
