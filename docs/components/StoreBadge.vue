<script setup lang="ts">
interface Props {
  text?: string
  type?: 'info' | 'tip' | 'warning' | 'danger'
  badge?: string
}
withDefaults(defineProps<Props>(), {
  type: 'danger'
})
</script>

<template>
  <a class="VPLink link VPNavBarMenuLink" href="/store" tabindex="0">
    <slot>{{ text }}<span class="Squimp small" :class="type">{{ badge }}</span></slot>
  </a>
</template>

<style>
.Squimp {
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  transform: translateY(-2px);
}
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
.VPNavBarMenuLink.active {
  color: var(--vp-c-brand-1);
}
@media (max-width: 768px) {
  .VPNavBarMenuLink{
    padding: 0;
  }
}
.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1);
}
.Squimp.small {
  padding: 0 4px;
  line-height: 16px;
  font-size: 10px;
  transform: translateX(4px);
}

.VPDocFooter .VPBadge {
  display: none;
}

.vp-doc h1 > .VPBadge {
  margin-top: 4px;
  vertical-align: top;
}

.vp-doc h2 > .VPBadge {
  margin-top: 3px;
  padding: 0 8px;
  vertical-align: top;
}

.vp-doc h3 > .VPBadge {
  vertical-align: middle;
}

.vp-doc h4 > .VPBadge,
.vp-doc h5 > .VPBadge,
.vp-doc h6 > .VPBadge {
  vertical-align: middle;
  line-height: 18px;
}

.Squimp.info {
  border-color: var(--vp-badge-info-border);
  color: var(--vp-badge-info-text);
  background-color: var(--vp-badge-info-bg);
}

.Squimp.tip {
  border-color: var(--vp-badge-tip-border);
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-tip-bg);
}

.Squimp.warning {
  border-color: var(--vp-badge-warning-border);
  color: var(--vp-badge-warning-text);
  background-color: var(--vp-badge-warning-bg);
}

.Squimp.danger {
  border-color: var(--vp-badge-danger-border);
  color: var(--vp-c-text-1);
  background-color: #F54F65;
}
</style>
