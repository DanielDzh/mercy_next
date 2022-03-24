let lastId = 0;

export default function generateId() {
  lastId++;
  return lastId;
}
