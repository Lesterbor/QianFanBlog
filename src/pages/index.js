import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  // 图片路径（将图片放在 static/img/ 目录下）
  const avatarUrl = useBaseUrl('/img/avatar.jpg'); // 替换为你的头像路径
  const bgPatternUrl = useBaseUrl('/img/bg-pattern.jpg'); // 可选背景纹理

  return (
    <Layout title="首页" description="个人技术博客与项目展示 | 修改自动同步 | 生的伟大 | 2">
      {/* 渐变背景 + 动态粒子效果容器 */}
      <div style={{
        background: 'linear-gradient(135deg, #70a148ff 0%, #a777e3 100%)',
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* 可选背景纹理（删除此div若无背景图） */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgPatternUrl})`,
          opacity: 0.1,
          zIndex: 0
        }}/>

        {/* 主内容区 */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '800px',
          margin: '0 auto',
          color: 'white'
        }}>
          {/* 圆形头像 + 悬浮动画 */}
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '4px solid white',
            margin: '0 auto 1.5rem',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}>
            <img 
              src={avatarUrl} 
              alt="个人头像" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '0.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            <span style={{ color: '#f8f32b' }}>千樊</span> 技术文档
          </h1>

          <p style={{ 
            fontSize: '1.2rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            全栈开发者 | 开源贡献者 | 技术博主<br/>
            专注于 React、Node.js 和云计算技术
          </p>

          {/* 主要CTA按钮 */}
          <div style={{ marginBottom: '3rem' }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
              style={{
                marginRight: '1rem',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                padding: '0.8rem 2rem',
                borderRadius: '50px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}>
              查看我的技术文档 →
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/blog"
              style={{
                color: 'white',
                borderColor: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                padding: '0.8rem 2rem',
                borderRadius: '50px'
              }}>
              阅读我的博客
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}