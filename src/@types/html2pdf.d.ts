// declare module 'html2pdf.js' {
//     interface Html2PdfOptions {
//         margin?: number | string;
//         filename?: string;
//         image?: { type: string; quality: number };
//         html2canvas?: {
//             scale?: number;
//             // Add other properties based on the html2canvas documentation if needed
//         };
//         jsPDF?: { unit: string; format: string; orientation: string };
//         pagebreak?: { mode: string; before?: string | RegExp; after?: string | RegExp };
//         // Add any other options you need
//     }

//     function html2pdf(): {
//         from(element: HTMLElement): {
//             save(filename?: string): Promise<void>;
//             // You can add other methods if needed
//         };
//     };

//     export default html2pdf;
// }