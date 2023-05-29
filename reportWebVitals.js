//constante reportWebVitals qui est une fonction prenant un argument onPerfEntry
//fct pr rapporter les métriques de perf de l'appli
const reportWebVitals = onPerfEntry => {
  //vérifie si onPerfEntry = défini et de type fct
  if (onPerfEntry && onPerfEntry instanceof Function) {
    //: Importe dynamiquement le module web-vitals qui contient des fonctions 
    //pour obtenir les métriques de performance
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      //prennent en charge la collecte des métriques spécifiques, telles que 
      //le Cumulative Layout Shift (CLS), le First Input Delay (FID), 
      //le First Contentful Paint (FCP), le Largest Contentful Paint (LCP) et 
      //le Time to First Byte (TTFB).
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
