export const handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };

  return response;
};
