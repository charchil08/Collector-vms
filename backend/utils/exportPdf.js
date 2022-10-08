const PDFDocument = require("pdfkit");
const fs = require("fs")
const path = require("path");

const exportPdf = (data, next) => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream("complain.pdf"));

    doc.fontSize(28).text("Collector Desk", 230, 100).fontSize(18).fillColor("#6600FF");

    doc.moveTo(100, 175).lineTo(500, 175).lineWidth(1).fillAndStroke("#000");
    doc.text(`ID: ${data.id}`, 100, 220);
    doc.moveTo(100, 250).lineTo(500, 250).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Date: ${data.date}`, 100, 260);
    doc.moveTo(100, 290).lineTo(500, 290).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Name: ${data.first_name} ${data.last_name}`, 100, 300);
    doc.moveTo(100, 330).lineTo(500, 330).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Mobile No.: ${data.mobile_no}`, 100, 340);
    doc.moveTo(100, 370).lineTo(500, 370).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Address: ${data.address}`, 100, 380);
    doc.moveTo(100, 450).lineTo(500, 450).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Details: ${data.details}`, 100, 460);
    doc.moveTo(100, 530).lineTo(500, 530).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Department Name: ${data.department_name}`, 100, 540);
    doc.moveTo(100, 570).lineTo(500, 570).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Remarks: ${data.remarks}`, 100, 580);
    doc.moveTo(100, 610).lineTo(500, 610).lineWidth(0.5).fillAndStroke("#000");
    doc.text(`Status: ${data.status}`, 100, 620);

    doc.end();

    stream.on('finish', function () {
        iframe.src = stream.toBlobURL('application/pdf');
    });

    next()
}

module.exports = exportPdf;