const records = [];
let nextId = 1;

async function getAll() {
  return records;
}

async function getById(id) {
  return records.find(r => r.id === parseInt(id)) || null;
}

async function create(data) {
  const record = { id: nextId++, ...data, createdAt: new Date().toISOString() };
  records.push(record);
  return record;
}

async function update(id, data) {
  const index = records.findIndex(r => r.id === parseInt(id));
  if (index === -1) return null;
  records[index] = { ...records[index], ...data };
  return records[index];
}

async function remove(id) {
  const index = records.findIndex(r => r.id === parseInt(id));
  if (index !== -1) records.splice(index, 1);
}

module.exports = { getAll, getById, create, update, remove };
