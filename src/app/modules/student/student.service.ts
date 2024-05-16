import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDb = async (student: Student) => {
  try {
    const result = await StudentModel.create(student)
    return result
  } catch (error) {
    console.log(error)
  }
}

export const StudentServices = {
  createStudentIntoDb,
}
