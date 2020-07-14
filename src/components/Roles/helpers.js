export default function roles_data_format(data) {
  if (data === null) {
    return [];
  }
  
  let result = [];
  
  data.map(role => result.push({
    key: role.id,
    name: role.name,
    permissions: role.permissions
  }));
  return result;
}