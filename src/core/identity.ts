/**
 * How this SDK identifies itself to Yad2.
 *
 * The transports deliberately send an honest user-agent rather than spoofing Chrome, and
 * the documented escalation path when you need sustained access is to ask Yad2 to
 * allowlist this string. That only works if someone at the other end can look it up, so
 * the name and URL have to be the real ones — an earlier build advertised a repository
 * that returns 404.
 */
export const SDK_NAME = 'yad2-search';
export const SDK_VERSION = '0.1';
export const SDK_HOMEPAGE = 'https://github.com/eran-broder/yad2-search';

export const USER_AGENT = `${SDK_NAME}/${SDK_VERSION} (+${SDK_HOMEPAGE})`;
