-- 1.	List the names (first and last name) of all instructors in alphabetical order (last name then first name).
select FIRST_NAME, LAST_NAME from Instructor
order by LAST_NAME, FIRST_NAME;
-- 10 Rows Returned

-- 2.	Provide a list of distinct locations that have been used to teach sections of courses.
-- Arrange the list in order of location.
select distinct Location from Section
order by Location;

-- 3.	List the first and last names of Instructors with a last name starting with “W”.
-- Sort them in alphabetical order.
select FIRST_NAME, LAST_NAME from Instructor
where LAST_NAME like 'W%'
order by LAST_NAME;

-- 4.	List the phone number, full name (as one column) and employer for all students with a last name of “Miller”.  Sort by phone number
select PHONE, concat(FIRST_NAME , ' ',  LAST_NAME) as FULL_NAME, EMPLOYER from Student
where LAST_NAME = 'Miller'
order by PHONE;

-- 5.	List the course number and course description of all courses that have a prerequisite of course 20.  Arrange in order of course number.
select COURSE_NO, DESCRIPTION from Course
where PREREQUISITE = 20
order by COURSE_NO;

-- 6.	List the course number, description and cost for all 200 level courses (200-299) costing less than $1100.  Arrange by course number.
Select COURSE_NO, DESCRIPTION, COST from Course
where (COURSE_NO between 200 and 299) and (COST < 1100)
order by COURSE_NO;

-- 7.	List the course number and section id for all 100 level courses (100 through 199) that are taught in room L211 or L214.
select COURSE_NO, SECTION_NO, SECTION_ID from Section
where (COURSE_NO between 100 and 199) and (LOCATION in ('L211', 'L214'));

-- 8.	List the course number and section id for classes with a capacity of 10 or 12 (use the IN clause). Order the list by course number and section id.
select COURSE_NO, SECTION_ID from Section
where CAPACITY in (10, 12)
order by COURSE_NO, SECTION_ID;

-- 9.	List the student id and grade for all of the final exam scores (FI) in section id 147.  Arrange the list by student id and grade.
select STUDENT_ID, NUMERIC_GRADE from Grade
where (GRADE_TYPE_CODE = 'FI') and (SECTION_ID = 147)
order by STUDENT_ID, NUMERIC_GRADE;

-- 10.	List the course number and description for all 200 level courses that have a prerequisite, arranged on course description.
select COURSE_NO, DESCRIPTION from Course
where (COURSE_NO between 200 and 299) and (PREREQUISITE is not null)
order by DESCRIPTION;

-- 11.	Provide an alphabetical list of the full name and phone number of all students that work for 'Board Utilities' 
-- (the full name should be displayed as one column with an alias of 'Student Name') 
select concat(FIRST_NAME, LAST_NAME) as 'Student Name', PHONE from Student
where EMPLOYER = 'Board Utilities'
order by LAST_NAME; 

-- 12.	Provide a list of student employers that have "Systems" in the company name. 
-- List each employer only once and arrange the list alphabetical order.
select distinct EMPLOYER from Student
where EMPLOYER like '%Systems%'
order by EMPLOYER;

-- 13.	Provide an alphabetical list of students in area code 212. 
-- List student name in the format <last name (all upper case)>, <first initial>. ( Example, LOCKE, J. ) followed by the phone number.
select concat(upper(LAST_NAME), ', ', left(FIRST_NAME,1), '. ') as 'FULL_NAME', PHONE from Student
where PHONE like '212%';

-- 14.	List the name and address of all students without a phone number 
-- (NOTE: Do not use IS NULL – instead check to see if it is an empty string).
select FIRST_NAME, LAST_NAME, STREET_ADDRESS from student
where PHONE = '';

-- 15.	Provide a list of zip codes for Jersey City, NJ.  Sort on zip.
select ZIP from ZIPCODE
where CITY = 'Jersey City' and STATE = 'NJ'
order by ZIP;

-- 16.	List the course number and location for all courses taught in building 'M'.  Arrange the list on course number.
select COURSE_NO, LOCATION from Section
where LOCATION like 'M%'
order by COURSE_NO;

-- 17.	Provide a list containing full state name, state abbreviation and city from the zip code 
-- table for the states of MA, FL and GA. (You'll need to use the CASE expression).
-- MA is Massachusetts, FL is Florida and GA is Georgia.  Sort by city.
select
	case 
		when STATE = 'MA' then 'Massachusetts'
        when STATE = 'FL' then 'Florida'
        when STATE = 'GA' then 'Georgia'
	end as FULL_STATE_NAME, STATE, ZIP, CITY from ZIPCODE where STATE in ('MA','FL','GA') 
    ORDER BY City;

-- 18.	Create a listing containing single column address (salutation, first name, last name, address, zip) 
-- as 'Instructor Address' for each instructor in zip code 10025.  Sort the list in alphabetical order.
select concat(SALUTATION, '. ',  FIRST_NAME,' ', LAST_NAME,' ', STREET_ADDRESS,' ', ZIP) as 'Instructor Address' from Instructor
where ZIP = 10025
order by LAST_NAME;

-- 19.	List the student id and final exam score for each student in section 87. List the scores from highest to lowest.
select STUDENT_ID, NUMERIC_GRADE from Grade
where SECTION_ID = 87 and GRADE_TYPE_CODE = 'FI' 
order by NUMERIC_GRADE DESC;

-- 20.	List the student ID, final exam (FI) score and exam result ('PASS' or 'FAIL') for all students in section 103. 
-- A final score of 85 or higher is required to pass .  Arrange the list by student ID.
select STUDENT_ID, NUMERIC_GRADE,
	case 
		when NUMERIC_GRADE >= 85 then 'PASS'
        when NUMERIC_GRADE < 85 then 'FAIL'
	end as EXAM_RESULT from Grade
where SECTION_ID = 103 and GRADE_TYPE_CODE = 'FI'
order by STUDENT_ID;

-- 21.	List the first name, last name and phone number for all students that registered on 2/23/2007.  
-- Arrange the list in order of last name and first name.
select FIRST_NAME, LAST_NAME, PHONE from Student
where cast(REGISTRATION_DATE as date) = '2007-02-23'
order by LAST_NAME, FIRST_NAME;

-- 22.	List course number, section ID and start date for all sections located in L211.  Arrange by start date
select COURSE_NO, SECTION_ID, START_DATE_TIME from Section
where LOCATION = 'L211'
order by START_DATE_TIME;

-- 23.	List the course number, section ID, start date, instructor ID 
-- and capacity for all courses with a start date in April 2007. Arrange the list by start date and course number.  (NOTE: Look at Month and Year functions)
select COURSE_NO, SECTION_ID, START_DATE_TIME, INSTRUCTOR_ID from Section
where (year(START_DATE_TIME) = 2007) and (month(START_DATE_TIME) = 4)
order by START_DATE_TIME, COURSE_NO;

-- 24.	List Student ID, Section ID and final grade for all students who have a final course grade and enrolled in January 2007.
select STUDENT_ID, SECTION_ID, FINAL_GRADE from Enrollment
where FINAL_GRADE is not null;

-- 25.	Create a query that returns the date of the end of the semester for courses that began on January 7, 2013. The semester is 98 days long.
select date_add(cast('2013-01-07' as date), interval 98 day) as 'End of Semester';

-- 26.	Provide a list of course numbers for sections being taught in the odd numbered rooms located in building M.  Sort on course number.
select COURSE_NO from Section
where LOCATION like 'M%' and (cast(right(location, 1) as signed) % 2 <> 0)
order by COURSE_NO;

-- 27.	Provide an alphabetic list of Students in zip code 11214 that registered more than 2 days after their student record was created.
select FIRST_NAME, LAST_NAME from Student
where ZIP = 11214 and datediff(REGISTRATION_DATE, CREATED_DATE) > 2
order by FIRST_NAME;

-- 28.	Create a list of student names from area code 203 along with the number of years since they 
-- registered (show 2 decimal places on all values). Sort the list on the number of years from highest to lowest.
select FIRST_NAME, round(datediff(now(), CREATED_DATE) % 365, 2) as 'Year(s) Since Registration' from Student
where PHONE like '203%'
order by 'Year(s) Since Registration' desc;

-- 29.	Create a list of starting times for all course sections. Eliminate duplicates.
select distinct START_DATE_TIME from Section;

-- 30.	List the Student ID and Section ID for all students who enrolled at 10:20am.  Sort by Student ID.
select STUDENT_ID, SECTION_ID from Enrollment
where (cast(ENROLL_DATE as datetime)) like '%10:20%'
order by STUDENT_ID;

-- 31.	List the course number and description and cost for all courses taught by Charles Lowry.  Arrange the list in order of course number.
select a.COURSE_NO, a.DESCRIPTION, a.COST from Course a
inner join Section b on a.COURSE_NO = b.COURSE_NO
inner join Instructor c on b.INSTRUCTOR_ID = c.INSTRUCTOR_ID
where c.FIRST_NAME = 'Charles' and c.LAST_NAME = 'Lowry'
order by a.COURSE_NO;

-- 32.	List the highest grade on the final exam that was given to a student in course 130.
select max(a.NUMERIC_GRADE) as 'Highest Final Exam in Course 130' from Grade a
inner join Section b on a.SECTION_ID = b.SECTION_ID
where a.GRADE_TYPE_CODE = 'FI' and b.COURSE_NO = 130;

-- 33.	List the full name and phone number for students that live in New York, NY.  Sort on last name and first name.
select a.FIRST_NAME, a.LAST_NAME, a.PHONE from Student a
inner join ZIPCODE b on a.ZIP = b.ZIP
where b.STATE = 'NY' and b.CITY = 'New York'
order by a.LAST_NAME, a.FIRST_NAME;

-- 34.	List the grade type code, description and number per section of all grades possible in course 220.  Arrange by description.
select * from Section;
select * from Grade_Type_Weight;
select * from Course;

select b.GRADE_TYPE_CODE, c.DESCRIPTION, b.NUMBER_PER_SECTION from Section a 
join Grade_Type_Weight b on a.SECTION_ID = b.SECTION_ID
join Course c on a.COURSE_NO = c.COURSE_NO
where a.COURSE_NO = 220
order by c.DESCRIPTION;

-- 35.	Provide an alphabetic list of students (student ID and name) who have received at 
-- least one failing grade (under 60) on one of their scores.  The full name should be one column (last name first) and sorted on last name then first name.
select a.STUDENT_ID, b.FIRST_NAME, b.LAST_NAME from Grade a
inner join Student b on a.STUDENT_ID = b.STUDENT_ID
where a.NUMERIC_GRADE < 60
order by b.LAST_NAME, b.FIRST_NAME;

-- 36.	List the different (unique) costs possible for courses.  Sort by cost.
select distinct COST from Course
order by COST;

-- 37.	List the course number of courses that have an upper division (300+) prerequisite.  Sort the list by course number.
select COURSE_NO from Course
where PREREQUISITE >= 300
order by COURSE_NO;

-- 38.	Provide a list of students (full name, enroll date and time) from Stamford, CT who enrolled after the cutoff (February 19, 2007 at 10:20am). Sort alphabetically on student.
select * from Student;
select * from Enrollment;
select * from ZIPCODE;

select concat(a.FIRST_NAME, a.LAST_NAME) as 'FULL_NAME', b.ENROLL_DATE from Student a
inner join Enrollment b on a.STUDENT_ID = b.STUDENT_ID
inner join ZIPCODE c on a.ZIP = c.ZIP
where c.STATE = 'CT' and c.CITY = 'Stamford' and b.ENROLL_DATE > '2007-02-19 10:20:20'
order by a.LAST_NAME, a.FIRST_NAME;

-- 39.	Provide a listing of courses (course number and description) that include projects (search Project - not  PJ ) as a part of their grade.  Arrange by course number.
select * from Grade_Type_Weight;
select * from GRADE_TYPE;
select * from Section;
select * from Course;

select d.COURSE_NO, d.DESCRIPTION from Grade a 
join GRADE_TYPE b on a.GRADE_TYPE_CODE = b.GRADE_TYPE_CODE
join Section c on a.SECTION_ID = c.SECTION_ID
join Course d on c.COURSE_NO = d.COURSE_NO
where b.DESCRIPTION  like '%Project%' and b.DESCRIPTION not like '%PJ%'
order by c.COURSE_NO;

-- 40.	For all 300 level courses (300-399), list the course number, prerequisite course number and prerequisite course description.  Sort by course number.
 select a.COURSE_NO, b.PREREQUISITE, b.DESCRIPTION as PREREQUISITE_DESCRIPTION from Course a
 left join Course b on a.PREREQUISITE = b.COURSE_NO
 where (b.PREREQUISITE is not null) and a.COURSE_NO between 300 and 399
 order by a.COURSE_NO;
 
 