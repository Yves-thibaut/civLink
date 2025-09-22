'use client';

import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/src/frontend/components/ui/button';
import { Card, CardContent, CardHeader } from '@/src/frontend/components/ui/card';
import { Badge } from '@/src/frontend/components/ui/badge';
import { Post } from '@/src/frontend/lib/data';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const typeColors: Record<string, string> = {
    project: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    opportunity: 'bg-orange-100 text-orange-800',
    news: 'bg-purple-100 text-purple-800'
  };

  const typeLabels: Record<string, string> = {
    project: 'Projet',
    success: 'Succès',
    opportunity: 'Opportunité',
    news: 'Actualité'
  };

  const formatTime = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diff = now.getTime() - postTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Aujourd\'hui';
    if (days === 1) return 'Hier';
    return `Il y a ${days} jours`;
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">{post.author}</div>
              <div className="text-sm text-gray-500">{formatTime(post.timestamp)}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={typeColors[post.type]} variant="secondary">
              {typeLabels[post.type]}
            </Badge>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-900 leading-relaxed">{post.content}</p>
        
        {post.image && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt="Post image"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
              <Heart className="h-4 w-4 mr-1" />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              <MessageCircle className="h-4 w-4 mr-1" />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
              <Share2 className="h-4 w-4 mr-1" />
              {post.shares}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}