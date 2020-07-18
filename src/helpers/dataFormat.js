/** Add key to objects */
export const AddKeyToArrayOfObject = (data) => {
    if (data.length == null) return [];
    data.forEach((item) => item.key = item.id)
    return data;
}
