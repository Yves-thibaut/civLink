'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, Plus, Share2, Heart, MessageCircle, Users, Briefcase, MapPin, Calendar, Globe, Mail, Phone, Shield, Award, TrendingUp } from 'lucide-react';
import PostCard from '@/components/PostCard';
import { posts } from '@/lib/data';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('posts');

  // Mock data for current OSC profile
  const oscProfile = {
    id: '1',
    name: 'Centre d\'Initiatives pour le Développement et la Paix (CIDP)',
    description: 'Organisation pionnière dans la promotion de la paix, de la démocratie et du développement durable en Afrique centrale. Nous œuvrons pour un dialogue constructif et une gouvernance participative.',
    avatar: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    cover: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    sector: 'Paix & Gouvernance',
    country: 'Cameroun',
    countryFlag: '🇨🇲',
    founded: '1995',
    website: 'www.cidp-cameroun.org',
    email: 'contact@cidp-cameroun.org',
    phone: '+237 677 123 456',
    address: 'Douala, Cameroun',
    verified: true,
    stats: {
      followers: 1247,
      following: 89,
      posts: 45,
      projects: 12,
      collaborations: 23
    },
    tags: ['Paix', 'Gouvernance', 'Dialogue', 'Formation', 'Démocratie', 'Développement'],
    recentProjects: [
      {
        name: 'Forum Afrique-Europe',
        description: 'Dialogue entre jeunes leaders africains et européens',
        status: 'active',
        budget: '75,000€',
        progress: 65
      },
      {
        name: 'Dialogue Inter-religieux',
        description: 'Promotion de la coexistence pacifique',
        status: 'active',
        budget: '25,000€',
        progress: 40
      },
      {
        name: 'Formation Leadership',
        description: 'Programme de formation pour 100 jeunes leaders',
        status: 'completed',
        budget: '50,000€',
        progress: 100
      }
    ],
    achievements: [
      {
        title: 'Prix de la Paix 2023',
        description: 'Reconnu pour son travail en faveur du dialogue intercommunautaire',
        date: '2023-12-15',
        icon: Award
      },
      {
        title: 'Certification ISO 9001',
        description: 'Système de gestion de la qualité certifié',
        date: '2023-08-20',
        icon: Shield
      },
      {
        title: 'Partenariat UE',
        description: 'Accord de partenariat avec l\'Union Européenne',
        date: '2023-06-10',
        icon: Globe
      }
    ]
  };

  const userPosts = posts.filter(post => post.oscId === oscProfile.id);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Cover Photo & Profile Header */}
        <Card className="overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-orange-500 to-yellow-500">
            <img
              src={oscProfile.cover}
              alt="Cover"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-end space-x-4">
                <img
                  src={oscProfile.avatar}
                  alt={oscProfile.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
                <div className="flex-1 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-2xl font-bold">{oscProfile.name}</h1>
                    {oscProfile.verified && (
                      <Shield className="h-6 w-6 text-blue-300" />
                    )}
                  </div>
                  <p className="text-orange-100 mb-2">{oscProfile.sector} • {oscProfile.country} {oscProfile.countryFlag}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {oscProfile.stats.followers.toLocaleString()} abonnés
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {oscProfile.stats.projects} projets
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {oscProfile.stats.collaborations} collaborations
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="bg-white/90 text-gray-900 hover:bg-white">
                    <Share2 className="h-4 w-4 mr-2" />
                    Partager
                  </Button>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Modifier
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Content */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-orange-600" />
                  À propos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {oscProfile.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    Fondée en {oscProfile.founded}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {oscProfile.address}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-4 w-4 mr-2 text-gray-400" />
                    <a href={`https://${oscProfile.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {oscProfile.website}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    {oscProfile.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    {oscProfile.phone}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Domaines d'expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {oscProfile.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-green-600" />
                    Projets récents
                  </span>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Nouveau
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {oscProfile.recentProjects.map((project, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{project.name}</h4>
                      <Badge className={project.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                        {project.status === 'active' ? 'Actif' : 'Terminé'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-green-600">{project.budget}</span>
                      {project.status === 'active' && (
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-2 bg-orange-500 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500">{project.progress}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Réalisations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {oscProfile.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <achievement.icon className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(achievement.date).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">Posts ({userPosts.length})</TabsTrigger>
                <TabsTrigger value="projects">Projets ({oscProfile.stats.projects})</TabsTrigger>
                <TabsTrigger value="collaborations">Collaborations ({oscProfile.stats.collaborations})</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="mt-6">
                <div className="space-y-4">
                  {/* Create Post Card */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={oscProfile.avatar}
                          alt={oscProfile.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <Button variant="outline" className="flex-1 justify-start text-gray-500">
                          Partagez une actualité, un projet ou une opportunité...
                        </Button>
                        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                          <Plus className="h-4 w-4 mr-2" />
                          Publier
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Posts */}
                  {userPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <div className="space-y-4">
                  {oscProfile.recentProjects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-lg text-gray-900">{project.name}</h3>
                          <Badge className={project.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}>
                            {project.status === 'active' ? 'En cours' : 'Terminé'}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{project.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-green-600">{project.budget}</span>
                          <span className="text-gray-500">
                            {project.status === 'active' ? `${project.progress}% complété` : 'Projet terminé'}
                          </span>
                        </div>
                        {project.status === 'active' && (
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        )}
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Modifier
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-1" />
                            Partager
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="collaborations" className="mt-6">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborations</h3>
                  <p className="text-gray-600 mb-4">
                    Vos collaborations avec d'autres OSC apparaîtront ici
                  </p>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Nouvelle collaboration
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}
