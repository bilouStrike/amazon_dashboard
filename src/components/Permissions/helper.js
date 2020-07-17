export default function permissions_data_format(data) {
    if (data === null) {
      return [];
    }
    
    let result = [];
    
    data.map(permission => result.push({
      key: permission.id,
      name: permission.name,
      service: permission.service
    }));
    return result;
  }