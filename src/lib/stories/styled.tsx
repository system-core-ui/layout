import styled from '@emotion/styled';
import { pxToRem } from '@thanh-libs/utils';

export const StoryContainer = styled.div(({ theme }) => ({
  padding: theme.spacing?.extraLarge ?? '2rem',
  fontFamily: theme.font?.fontFamily ?? 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing?.large ?? '1rem',
}));

export const StorySectionTitle = styled.h2(({ theme }) => ({
  fontSize: theme.typography?.body?.fontSize ?? '0.875rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: theme.palette?.primary?.main ?? '#1976d2',
  margin: `0 0 ${theme.spacing?.small ?? '0.5rem'}`,
}));

export const DemoBox = styled.div<{ ownerColor?: string }>(
  ({ theme, ownerColor }) => ({
    padding: theme.spacing?.medium ?? '0.75rem',
    borderRadius: theme.shape?.borderRadiusTiny ?? 4,
    background: ownerColor ?? theme.palette?.primary?.extraLight ?? '#e3f2fd',
    border: `${pxToRem(1)} solid ${theme.palette?.divider ?? '#e0e0e0'}`,
    textAlign: 'center',
    fontSize: '0.8rem',
    fontWeight: 500,
  }),
);

export const DemoNav = styled.nav(({ theme }) => ({
  background: theme.palette?.primary?.main ?? '#1976d2',
  color: theme.palette?.common?.white ?? '#fff',
  padding: `${theme.spacing?.medium ?? '0.75rem'} ${theme.spacing?.large ?? '1rem'}`,
  borderRadius: theme.shape?.borderRadiusTiny ?? 4,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 600,
}));

export const DemoSidebar = styled.aside(({ theme }) => ({
  background: theme.palette?.background?.secondary ?? '#f5f5f5',
  padding: theme.spacing?.large ?? '1rem',
  borderRadius: theme.shape?.borderRadiusTiny ?? 4,
  minHeight: 200,
}));

export const DemoContent = styled.main(({ theme }) => ({
  padding: theme.spacing?.large ?? '1rem',
  borderRadius: theme.shape?.borderRadiusTiny ?? 4,
  border: `${pxToRem(1)} solid ${theme.palette?.divider ?? '#e0e0e0'}`,
  minHeight: 200,
}));

export const DemoFooter = styled.footer(({ theme }) => ({
  background: theme.palette?.background?.secondary ?? '#f5f5f5',
  padding: theme.spacing?.medium ?? '0.75rem',
  borderRadius: theme.shape?.borderRadiusTiny ?? 4,
  textAlign: 'center',
  fontSize: '0.8rem',
  opacity: 0.7,
}));
