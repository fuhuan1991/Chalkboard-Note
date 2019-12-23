package com.winterproject.demo.student;

import com.winterproject.demo.EmailValidator;
import com.winterproject.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class StudentService {

  private final StudentDataAccessService studentDataAccessService;
  private final EmailValidator emailValidator;

  @Autowired
  public StudentService (StudentDataAccessService studentDataAccessService, EmailValidator emailValidator) {
    this.studentDataAccessService = studentDataAccessService;
    this.emailValidator = emailValidator;
  }

  List<Student> getAllStudents() {
    return studentDataAccessService.selectAllStudents();
  }

  void addNewStudent(Student student) {
    addNewStudent(null, student);
  }

  void addNewStudent(UUID studentId, Student student) {
    UUID newStudentId = Optional.ofNullable(studentId).orElse(UUID.randomUUID());

    if (!emailValidator.test(student.getEmail())) {
      throw new ApiRequestException(student.getEmail() + "is not valid");
    }

    if (studentDataAccessService.isEmailTaken(student.getEmail())) {
      throw new ApiRequestException(student.getEmail() + " is taken");
    }

    studentDataAccessService.insertStudent(newStudentId, student);
  }

  public List<StudentCourse> getAllCoursesForStudent(UUID studentId) {
    return studentDataAccessService.selectAllstudentCourses(studentId);
  }
}
