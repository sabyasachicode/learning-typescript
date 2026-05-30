class ugStudent {
  studentOf() {
    return `UG student`;
  }
}

class pgStudent {
  studentOf() {
    return `PG student`;
  }
}

function printClass(student: ugStudent | pgStudent) {
  if (student instanceof ugStudent) {
    return student.studentOf();
  }
}

type cardOrder = {
  type: string;
  quantity: number;
};
