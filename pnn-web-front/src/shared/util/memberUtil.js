/**
 * @function filterMemberAuthority
 * @description Filters an array of members based on the given authority value.
 * @param {Object[]} data - The array of member objects to filter.
 * @param {string | number} value - The authority value to filter by.
 * @returns {Object[]} - A new array containing only the members with the matching authority.
 * @throws {Error} If data is not an array or value is not provided.
 */
export const filterMemberAuthority = (data, value) => {
  const newArr = data.filter((v) => v.authority === value);
  return newArr;
};

/**
 * @function filterMemberGrade
 * @description Filters an array of members based on the given grade value.
 * @param {Object[]} data - The array of member objects to filter.
 * @param {string | number} value - The grade value to filter by.
 * @returns {Object[]} - A new array containing only the members with the matching grade.
 * @throws {Error} If data is not an array or value is not provided.
 */
export const filterMemberGrade = (data, value) => {
  const newArr = data.filter((v) => v.grade === value);
  return newArr;
};
