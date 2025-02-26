function Button(color) {
  let data = "";
  switch (color.color) {
    case "primary":
      data = "#007bff";
      break;
    case "secondary":
      data = "#6c757d";
      break;
    case "success":
      data = "#28a745";
      break;
    case "danger":
      data = "#dc3545";
      break;
    case "warning":
      data = "#ffc107";
      break;
    case "info":
      data = "#17a2b8";
      break;
    case "light":
      data = "#f8f9fa";
      break;
    case "dark":
      data = "#343a40";
      break;
  }
  return <button style={{ backgroundColor: data }}>btn</button>;
}

export default Button;
