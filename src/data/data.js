import data from './messages_sample.json';

const customData = data.messages.map((item) => {
  return {
    ...item,
    read: false,
  };
});

export default customData;
