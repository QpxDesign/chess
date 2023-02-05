export function handlePreviewReset() {
  const gbc = new Array(8);
  for (var i = 0; i < gbc.length; i++) {
    gbc[i] = new Array(8);
  }
  for (var bh1 = 0; bh1 < gbc.length; bh1++) {
    for (var bh2 = 0; bh2 < gbc.length; bh2++) {
      gbc[bh1][bh2] = "";
    }
  }
  return gbc;
}
