#!/usr/bin/env node
/**
 * Fix yarn.lock registry URLs before installation
 * This script replaces private registry URLs with public ones
 */

const fs = require('fs');
const path = require('path');

const yarnLockPath = path.join(__dirname, 'yarn.lock');

if (fs.existsSync(yarnLockPath)) {
  let content = fs.readFileSync(yarnLockPath, 'utf8');
  
  // Replace private registry URLs with public registry
  const privateRegistryPattern = /https:\/\/delivery-nexus\.leo-platform-infra\.lvg-tech\.net\/repository\/npm\//g;
  const publicRegistry = 'https://registry.yarnpkg.com/';
  
  if (privateRegistryPattern.test(content)) {
    content = content.replace(privateRegistryPattern, publicRegistry);
    fs.writeFileSync(yarnLockPath, content, 'utf8');
    console.log('✅ Fixed yarn.lock registry URLs');
  } else {
    console.log('✅ yarn.lock already uses public registry');
  }
} else {
  console.log('⚠️  yarn.lock not found, will be created with public registry');
}

