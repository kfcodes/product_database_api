module.exports.HazardsData = async (data) => {
  `
^FX HAZARDS LIST
^FO293,20^A0,25^FD${processs.env.HAZARD_1}^FS
^FO253,20^A0,25^FD${processs.env.HAZARD_2}^FS
^FO213,20^A0,25^FD${processs.env.HAZARD_3}^FS
^FO173,20^A0,25^FD${processs.env.HAZARD_4}^FS
^FO133,20^A0,25^FD${processs.env.HAZARD_5}^FS
^FO93,20^A0,25^FD${processs.env.HAZARD_6}^FS
^FO53,20^A0,25^FD${processs.env.HAZARD_7}^FS
^FO13,20^A0,25^FD${processs.env.HAZARD_8}^FS
^FO333,620^A0,25^FD${processs.env.HAZARD_9}^FS
^FO293,620^A0,25^FD${processs.env.HAZARD_10}^FS
^FO253,620^A0,25^FD${processs.env.HAZARD_11}^FS
^FO213,620^A0,25^FD${processs.env.HAZARD_12}^FS
^FO173,620^A0,25^FD${processs.env.HAZARD_13}^FS
^FO133,620^A0,25^FD${processs.env.HAZARD_14}^FS
^FO93,620^A0,25^FD${processs.env.HAZARD_15}^FS
^FO53,620^A0,25^FD${processs.env.HAZARD_16}^FS
^FO53,620^A0,25^FD${processs.env.HAZARD_17}^FS

^FX PRODUCT INFORMATION
^FO400,330^A0,30^FD${data.precautions}^FS
^FO675,325^A0,30^FD${data.code}^FS
^FO625,325^A0,30^FD${data.name}^FS
^FO575,325^A0,30^FD${data.lot}^FS
^FO525,325^A0,30^FD${data.bbe}^FS
^FO475,325^A0,30^FD${data.date}^FS
  `;
};
