const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
};

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US");
};

module.exports = { formatCurrency, truncateText, formatDate };
