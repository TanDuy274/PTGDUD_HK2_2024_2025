import Button from "react-bootstrap/Button";
import "./Item.css";

const Item = ({ image, title, time }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__img" />
      <div className="content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className="content__title">{title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ff007f"
            class="bi bi-bookmark-fill"
            viewBox="0 0 16 16"
            style={{ border: "1px solid #f34b87" }}
          >
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
          </svg>
        </div>
        <Button className="btn-pink">{time} minutes</Button>
      </div>
    </div>
  );
};

export default Item;
