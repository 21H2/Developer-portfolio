module.exports = [
"[externals]/locomotive-scroll [external] (locomotive-scroll, esm_import, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_locomotive-scroll_a38b9144._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/locomotive-scroll [external] (locomotive-scroll, esm_import)");
    });
});
}),
];