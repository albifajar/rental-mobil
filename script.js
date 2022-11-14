function crud() {
  return {
    addMode: true,
    id: "",
    form: {
      name: "",
      mobil: "",
      waktu: "",
    },
    students: [
      {
        name: "testing",
        mobil: "testing",
        waktu: "",
      },
    ],
    saveData() {
      if (this.form.name.length && this.form.mobil.length) {
        console.log(this.form);
        this.students.push({
          name: this.form.name,
          mobil: this.form.mobil,
          waktu: this.form.waktu,
        });
        this.resetForm();
      }
    },
    detail(student, index) {
      new bootstrap.Modal("#editData", {
        keyboard: false,
      }).show();

      this.form.name = student.name;
      this.form.mobil = student.mobil;
      this.form.waktu = student.waktu;
      this.id = index;
    },
    updateData() {
      if (this.form.name.length && this.form.mobil.length) {
        this.students.splice(this.id, 1, {
          name: this.form.name,
          mobil: this.form.mobil,
        });
        this.resetForm();
      }
    },
    deleteData(index) {
      this.students.splice(index, 1);
    },
    cancelEdit() {
      this.resetForm();
    },
    resetForm() {
      this.form.name = "";
      this.form.mobil = "";
      this.form.waktu = "";
      this.addMode = true;
    },
  };
}
