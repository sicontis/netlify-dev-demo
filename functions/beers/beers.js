async function beers() {
  return Promise.resolve("Hello, World");
}

exports.handler = async function(event, context) {
  try {
    const body = await beers();
    return { statusCode: 200, body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
