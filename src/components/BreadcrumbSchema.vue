<template>
  <div style="display: none;">
    <!-- Breadcrumb Schema viene inyettato via useMeta() nel setup -->
  </div>
</template>

<script>
import { useMeta } from 'quasar';

export default {
  name: 'BreadcrumbSchema',
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    // Schema Breadcrumb dinamico - uso props correttamente per mantenere reattività
    const generateBreadcrumbSchema = () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList", 
      "itemListElement": props.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://easysite-191e5.web.app${item.url}`
      }))
    });
    
    // Inject structured data nel head
    useMeta(() => ({
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(generateBreadcrumbSchema())
      }]
    }));
  }
};
</script>