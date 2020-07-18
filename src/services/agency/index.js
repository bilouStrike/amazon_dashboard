import Http from '../../util/Http';

/** Get all agency users */
export const getAgencyUsers = async (agencyId) => {
  const { data, statusText } = await Http.get(`/agencies/${agencyId}/users`, agencyId);
  return { data, statusText };
};