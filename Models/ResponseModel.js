const response = {
  code: 0,
  message: "",
  messageTitle: "",
  payload: null,

  estructura(cod, msg, title, data = null) {
    this.code = cod;
    this.message = msg;
    this.messageTitle = title;
    this.payload = data;
  },
  estructura(records) {
    return records[0][0];
  },
};

module.exports = response;
