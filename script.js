const listmobil = (index = false) => {
  let data = [
    {
      name: "Avanza",
      harga: 20000,
      id: 0,
    },
    {
      name: "testing",
      harga: 20000,
      id: 1,
    },
  ];
  if (data[index]) {
    return data[index];
  }
  return data;
};

const convertRange = (date) => {
  let rangeDate = date.split(" to ");
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(rangeDate[0]);
  const secondDate = new Date(rangeDate[1]);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
};

const crud = () => {
  return {
    addMode: true,
    id: "",
    form: {
      name: "",
      mobil: {},
      waktu: "",
      total: 0,
    },
    students: [],
    detail(student, index) {
      new bootstrap.Modal("#editData", {
        keyboard: false,
      }).show();

      this.form.name = student.name;
      this.form.mobil = student.mobil.id;
      this.form.mobilname = student.mobil.name;
      this.form.waktu = student.waktu;
      this.form.waktuEnd = student.waktu.split(" to ")[1];
      this.form.waktuStart = student.waktu.split(" to ")[0];
      this.form.waktuTotalRange = convertRange(student.waktu) + " Hari";
      this.form.total = student.total;
      this.id = index;
    },
    openEdit(student, index) {
      this.addMode = false;
    },
    closeEdit(student, index) {
      this.addMode = true;
    },
    saveData() {
      if (this.form.name.length && this.form.mobil.length) {
        console.log(this.form);
        this.students.push({
          name: this.form.name,
          mobil: listmobil(this.form.mobil),
          waktu: this.form.waktu,
          total: this.form.total,
        });
        this.resetForm();
      }
    },
    updateData() {
      this.students.splice(this.id, 1, {
        name: this.form.name,
        mobil: listmobil(this.form.mobil),
        waktu: this.form.waktu,
        total: this.form.total,
      });
      this.resetForm();
    },
    deleteData(index) {
      this.students.splice(index, 1);
    },
    resetForm() {
      this.form.name = "";
      this.form.mobil = {};
      this.form.waktu = "";
      this.form.total = 0;
      this.addMode = true;
    },
  };
};
