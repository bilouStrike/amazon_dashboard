import axios from 'axios';
import {
  findValueInarrayOfObjects,
  getObjectByinnerValue,
  getValuesByInnerKeyValue,
  countPagesNumber,
} from './helpers';

const PAGE_LIMIT = 5;
const getUsers = () => axios.get('http://localhost:3004/users');
const getAllSubjects = () => axios.get('http://localhost:3004/subjects');
const getUser = (id) => axios.get(`http://localhost:3004/users/${id}`);
const getSubjectSuggests = () =>
  axios.get('http://localhost:3004/subjectSuggests');
const getSubjectComments = () => axios.get('http://localhost:3004/comments');
const getCategories = () => axios.get('http://localhost:3004/categories');
const updateSuggest = (id, data) =>
  axios.put(`http://localhost:3004/subjectSuggests/${id}`, data);
const addSubject = (data) => axios.post('http://localhost:3004/subjects', data);

const countAllSubjects = async () => {
  const subjects = await getAllSubjects();
  const data = await subjects.data;
  return data.length;
};

/** Sign up  */
const signup = async (usercredentials) => {
  try {
    const userCollection = await getUsers();
    const users = await userCollection.data;
    const userExist = findValueInarrayOfObjects(
      users,
      'email',
      usercredentials.email,
    );
    if (userExist) {
      throw new Error('user exist');
    }
    const saveUser = await axios.post(
      'http://localhost:3004/users',
      usercredentials,
    );
    return saveUser.statusText;
  } catch (error) {
    return error.message;
  }
};

/** Sign in */
const signIn = async (usercredentials) => {
  try {
    const userCollection = await getUsers();
    const users = await userCollection.data;
    return getObjectByinnerValue(users, 'email', usercredentials.email);
  } catch (error) {
    return error.message;
  }
};

/** Sign out  */
const signOut = () => true;

/** get subjects lists by category */
const getSubjectsByCategory = async (id, page) => {
  const start = (page - 1) * PAGE_LIMIT;
  const end = page * PAGE_LIMIT;
  const subjectCollection = await getAllSubjects();
  const subjects = await subjectCollection.data;
  const allResultat = await getValuesByInnerKeyValue(subjects, 'category', id);
  const subjectlist = allResultat.slice(start, end);
  const pagesNumber = countPagesNumber(allResultat.length, PAGE_LIMIT);
  return {
    subjectlist,
    pagesNumber,
  };
};

/** get subjects */
const getSubjectsList = async ({ page, id }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  if (id !== undefined && id !== 0 && id !== '') {
    return getSubjectsByCategory(id, page);
  }
  const result = await axios.get(
    `http://localhost:3004/subjects?_page=${page}&_limit=${PAGE_LIMIT}`,
  );
  const subjectlist = result.data;
  const total = await countAllSubjects();
  const pagesNumber = countPagesNumber(total, PAGE_LIMIT);
  return {
    subjectlist,
    pagesNumber,
  };
};

/** get subject by id */
const getSubject = async (id) => {
  const result = await axios.get(`http://localhost:3004/subjects/${id}`);
  return result.data;
};

/** get suggests lists by subject id */
const getSuggestsById = async (id) => {
  const suggestCollection = await getSubjectSuggests();
  const suggests = await suggestCollection.data;
  const resultat = await getValuesByInnerKeyValue(suggests, 'subjectId', id);
  return resultat;
};

/** Add new suggest to subject */
const addSuggest = async (suggest) => {
  const { data } = await axios.post(
    'http://localhost:3004/subjectSuggests',
    suggest,
  );
  if (Number(data.id)) {
    return getSuggestsById(data.subjectId);
  }
  return 'Try agin';
};

/** Add new suggest to subject */
const deleteSuggest = async ({ id, subjectId }) => {
  await axios.delete(`http://localhost:3004/subjectSuggests/${id}`);
  return getSuggestsById(subjectId);
};

/** Adding vote to subject */
const addvoteToSubject = async (id) => {
  const suggestCollection = await getSubjectSuggests();
  const suggests = await suggestCollection.data;
  let subject = 0; // memorise subjectid of this suggest; it"s facking game to test
  // eslint-disable-next-line no-unused-vars
  let newData = null;
  suggests.forEach((elem) => {
    if (Number(elem.id) === Number(id)) {
      // eslint-disable-next-line no-param-reassign
      elem.votes += 1;
      subject = elem.subjectId;
      newData = elem;
    }
  });
  await updateSuggest(id, newData);
  return getSuggestsById(subject);
};

/* get comments by subject id */
const getCommentsBySubject = async (id) => {
  const commentsCollection = await getSubjectComments();
  const comments = await commentsCollection.data;
  const resultat = await getValuesByInnerKeyValue(comments, 'subjectId', id);
  return resultat;
};

/** Add ne comment */
const addComment = async (data) => {
  await axios.post('http://localhost:3004/comments/', data);
  const comments = await getCommentsBySubject(Number(data.subjectId));
  return comments;
};

export default {
  signup,
  getUsers,
  getUser,
  signIn,
  signOut,
  getSubjectsList,
  getSubject,
  getSuggestsById,
  addvoteToSubject,
  getCommentsBySubject,
  addComment,
  addSubject,
  addSuggest,
  deleteSuggest,
  getCategories,
  getSubjectsByCategory,
};
