/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        { first_name: 'Yovanna', last_name: 'Magranell', salary: 628710, job_title: 'Statisticain', age: '1991-06-17', date_start: '2021-05-06', department: 2},
        { first_name: 'Elena', last_name: 'Spivak', salary: 328710, job_title: 'Executive Secretary', age: '1990-03-01', date_start: '2021-11-06', department:1},
{ first_name: 'Sayer', last_name: 'Matterson', salary: 62871, job_title: 'Account Executive', age: '1980-01-01', date_start: '2020-10-06', department:1},
{ first_name: 'Mindy', last_name: 'Crissi', salary: 948601, job_title: 'Staff Scientist', age: '1983-08-01', date_start: '2015-11-26', department:1},
{ first_name: 'Keriann', last_name: 'Allossi', salary: 110150, job_title: 'VP Marketing', age: '1985-07-11', date_start: '2010-10-12', department:2},
{ first_name: 'Alaster', last_name: 'Scutchin', salary: 32179, job_title: 'Assistant Professor', age: '1989-05-11', date_start: '2016-10-12', department:2},
{ first_name: 'North', last_name: 'de Clerc', salary: 114257, job_title: 'VP Product Management', age: '1991-05-01', date_start: '2019-10-12', department:2},
{ first_name: 'Elladine', last_name: 'Rising', salary: 96767, job_title: 'Social Worker', age: '1988-04-21', date_start: '2019-12-12', department:4},
{ first_name: 'Nisse', last_name: 'Voysey', salary: 52832, job_title: 'Financial Advisor', age: '1986-02-15', date_start: '2020-02-12', department:3},
{ first_name: 'Guthrey', last_name: 'Lacopetti', salary: 117690, job_title: 'Office Assistant', age: '1988-02-15', date_start: '2021-03-12', department:3},
{ first_name: 'Kass', last_name: 'Hefferan', salary: 96401, job_title: 'Computer System Analyst', age: '1995-08-10', date_start: '2021-06-22', department:3},
{ first_name: 'Virge', last_name: 'Goodrum', salary: 54578, job_title: 'Information System Manager', age: '1994-09-09', date_start: '2020-05-26', department:4},
{ first_name: 'Mirella', last_name: 'Jonowski', salary: 119241, job_title: 'Cost Accountant', age: '1982-08-09', date_start: '2017-05-06', department:4},
{ first_name: 'Lynde', last_name: 'Aronson', salary: 77182, job_title: 'Junior Executive', age: '1986-11-02', date_start: '2018-09-06', department:4},
{ first_name: 'Mildrid', last_name: 'Sokale', salary: 67987, job_title: 'Geologist', age: '1988-12-02', date_start: '2018-09-06', department:3},
{ first_name: 'Hazil', last_name: 'Tarbert', salary: 93760, job_title: 'General Manager', age: '1981-02-02', date_start: '2012-09-06', department:3},
{ first_name: 'Cole', last_name: 'Kesterton', salary: 86119, job_title: 'Pharmacist', age: '1988-03-23', date_start: '2016-09-15', department:3},
{ first_name: 'Theresa', last_name: 'Binney', salary: 47354, job_title: 'Food Chemist', age: '1999-03-21', date_start: '2019-06-15', department:3},
{ first_name: 'Estrellita', last_name: 'Daleman', salary: 70187, job_title: 'Staff Accountant', age: '1992-04-11', date_start: '2019-02-15', department:2},
{ first_name: 'Ivy', last_name: 'Fearey', salary: 92710, job_title: 'Structural Engineer', age: '1989-11-12', date_start: '2019-03-03', department:2},
      ]);
    });
};
