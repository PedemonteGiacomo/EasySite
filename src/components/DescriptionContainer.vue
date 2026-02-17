<template>
  <div class="description-wrapper" :class="containerVariant">
    <div class="container">
      <div class="description-content" :class="alignmentClass">
        <p :class="computedTextClass">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionContainer",
  props: {
    // Deprecated props for backward compatibility
    containerClass: {
      type: String,
      default: ""
    },
    textClass: {
      type: String,
      default: ""
    },
    
    // New modern props
    variant: {
      type: String,
      default: "default",
      validator: (val) => ['default', 'emphasis', 'subtle'].includes(val)
    },
    alignment: {
      type: String,
      default: "center",
      validator: (val) => ['left', 'center', 'right'].includes(val)
    },
    size: {
      type: String,
      default: "medium",
      validator: (val) => ['small', 'medium', 'large'].includes(val)
    }
  },
  computed: {
    containerVariant() {
      return `description-${this.variant}`;
    },
    alignmentClass() {
      return `text-${this.alignment}`;
    },
    computedTextClass() {
      // If legacy textClass is provided, use it for backward compatibility
      if (this.textClass && this.textClass !== "") {
        return this.textClass;
      }
      
      // Otherwise use modern size-based classes
      const sizeClasses = {
        small: 'text-body1',
        medium: 'text-h6', 
        large: 'text-h5'
      };
      
      return `${sizeClasses[this.size]} text-grey-8 text-balance`;
    }
  }
};
</script>

<style lang="scss" scoped>
.description-wrapper {
  padding: 24px 0;
  
  @media (min-width: 768px) {
    padding: 32px 0;
  }
}

.description-content {
  max-width: 800px;
  margin: 0 auto;
  
  p {
    margin: 0;
    line-height: 1.7;
    font-weight: 400;
  }
}

// Variants
.description-default {
  // Default styling
}

.description-emphasis {
  .description-content p {
    font-weight: 500;
    color: var(--text);
  }
}

.description-subtle {
  .description-content p {
    color: var(--text-muted);
    font-size: 0.9em;
  }
}

// Legacy support - these should eventually be removed
.description-container {
  .container {
    max-width: 80%;
  }
}

.description-container2 {
  .container {
    max-width: 100%;
  }
}
</style>
