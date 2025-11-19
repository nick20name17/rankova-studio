import Script from 'next/script'

export const SeoScripts = () => {
  return (
    <>
      <Script
        id='gtm-head'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WP4MT8NM');`
        }}
      />

      <Script
        src='https://www.googletagmanager.com/gtag/js?id=AW-17648212179'
        strategy='afterInteractive'
      />

      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17648212179');
            `
        }}
      />
      <Script
        id='facebook-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1402415434776405');
            fbq('track', 'PageView');
          `
        }}
      />
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1402415434776405&ev=PageView&noscript=1'
          alt=''
        />
      </noscript>

      <Script
        id='google-ads-conversion'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          gtag('event', 'conversion', {
            'send_to': 'AW-17711540948/jfe5CJOCtL0bENTVwv1B',
            'value': 1.0,
            'currency': 'UAH'
          });
        `
        }}
      />

      <Script
        id='google-tag-manager'
        async
        src='https://www.googletagmanager.com/gtag/js?id=AW-17711540948'
      />
      <Script
        id='google-tag-manager-config'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17711540948');
          `
        }}
      />
    </>
  )
}
