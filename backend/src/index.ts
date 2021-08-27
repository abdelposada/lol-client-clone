import express from 'express';

const port = process.env.PORT || 4000;

const main = async () => {
  const app = express();

  app.listen(port, () => console.info(`Server started on port ${port}`));
};

main().catch((err) => console.error(err));
