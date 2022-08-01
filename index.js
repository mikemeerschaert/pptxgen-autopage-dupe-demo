import PptxGenJS from "pptxgenjs"

const presentation = new PptxGenJS()

const slide = presentation.addSlide()

slide.addTable(
  [
    [
      {
        text: "column 1 header",
        options: { bold: true },
      },
      { text: "column 2 header", options: { bold: true } },
    ],
    [
      {
        text: [
          { text: "this will be duplicated" },
          { text: "1", options: { superscript: true } },
        ],
      },
      { text: "column 2" },
    ],
  ],
  { autoPage: true }
)

presentation.writeFile({ fileName: "example.pptx" })
