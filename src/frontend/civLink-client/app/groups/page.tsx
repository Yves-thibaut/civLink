'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Users, MessageCircle, Calendar, TrendingUp, Plus, Lock, Globe, Star, Filter } from 'lucide-react';

export default function GroupsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const groups = [
    {
      id: '1',
      name: 'Paix & Gouvernance',
      description: 'Espace de dialogue pour les OSC travaillant sur la promotion de la paix, la démocratie et la bonne gouvernance en Afrique.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      members: 245,
      posts: 89,
      sector: 'Paix & Gouvernance',
      privacy: 'public',
      language: 'Français',
      created: '2023-01-15',
      lastActivity: '2024-01-15T10:30:00Z',
      tags: ['Paix', 'Démocratie', 'Gouvernance', 'Dialogue'],
      featured: true,
      moderators: ['CIDP Cameroun', 'Peace Network', 'Governance Hub']
    },
    {
      id: '2',
      name: 'Environnement & Climat',
      description: 'Collaboration pour la protection de l\'environnement, la lutte contre le changement climatique et la promotion du développement durable.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      members: 189,
      posts: 156,
      sector: 'Environnement',
      privacy: 'public',
      language: 'Français',
      created: '2023-02-20',
      lastActivity: '2024-01-14T15:45:00Z',
      tags: ['Climat', 'Environnement', 'Durabilité', 'Biodiversité'],
      featured: true,
      moderators: ['Green Belt Movement', 'Climate Action', 'Eco Warriors']
    },
    {
      id: '3',
      name: 'Santé Communautaire',
      description: 'Réseau d\'OSC santé pour améliorer l\'accès aux soins et promouvoir la santé publique dans les communautés africaines.',
      image: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
      members: 156,
      posts: 78,
      sector: 'Santé',
      privacy: 'public',
      language: 'Français',
      created: '2023-03-10',
      lastActivity: '2024-01-13T09:20:00Z',
      tags: ['Santé', 'Communauté', 'Médecine', 'Prévention'],
      featured: false,
      moderators: ['Médecins d\'Afrique', 'Health First', 'Rural Care']
    },
    {
      id: '4',
      name: 'Éducation & Formation',
      description: 'Plateforme d\'échange sur les innovations éducatives, la formation professionnelle et l\'accès à l\'éducation en Afrique.',
      image: 'https://images.pexels.com/photos/5088026/pexels-photo-5088026.jpeg',
      members: 298,
      posts: 134,
      sector: 'Éducation',
      privacy: 'public',
      language: 'Français',
      created: '2023-01-25',
      lastActivity: '2024-01-12T14:15:00Z',
      tags: ['Éducation', 'Formation', 'Innovation', 'Jeunesse'],
      featured: true,
      moderators: ['EduAfrica', 'Education Hub', 'Learning Network']
    },
    {
      id: '5',
      name: 'Droits des Femmes',
      description: 'Espace dédié à la promotion des droits des femmes, l\'égalité des genres et l\'autonomisation féminine.',
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
      members: 167,
      posts: 92,
      sector: 'Genre & Droits humains',
      privacy: 'public',
      language: 'Français',
      created: '2023-04-05',
      lastActivity: '2024-01-11T16:30:00Z',
      tags: ['Femmes', 'Droits', 'Égalité', 'Autonomisation'],
      featured: false,
      moderators: ['Women Empowerment Hub', 'Gender Rights', 'Femme Leaders']
    },
    {
      id: '6',
      name: 'Innovation & Tech',
      description: 'Communauté d\'innovateurs et d\'entrepreneurs tech pour partager les dernières tendances et collaborer sur des projets numériques.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      members: 234,
      posts: 201,
      sector: 'Jeunesse & Innovation',
      privacy: 'public',
      language: 'Français',
      created: '2023-05-12',
      lastActivity: '2024-01-10T11:45:00Z',
      tags: ['Tech', 'Innovation', 'Startup', 'Digital'],
      featured: true,
      moderators: ['Tech4Africa', 'Innovation Hub', 'Startup Network']
    },
    {
      id: '7',
      name: 'Culture & Patrimoine',
      description: 'Préservation et promotion du patrimoine culturel africain à travers l\'art, la musique et les traditions.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
      members: 123,
      posts: 67,
      sector: 'Culture & Patrimoine',
      privacy: 'public',
      language: 'Français',
      created: '2023-06-18',
      lastActivity: '2024-01-09T13:20:00Z',
      tags: ['Culture', 'Patrimoine', 'Art', 'Traditions'],
      featured: false,
      moderators: ['Ubuntu Cultural Foundation', 'Heritage Network', 'Art Collective']
    },
    {
      id: '8',
      name: 'Agriculture & Sécurité Alimentaire',
      description: 'Collaboration pour améliorer la sécurité alimentaire et promouvoir l\'agriculture durable en Afrique.',
      image: 'https://images.pexels.com/photos/2933521/pexels-photo-2933521.jpeg',
      members: 145,
      posts: 89,
      sector: 'Agriculture & Sécurité Alimentaire',
      privacy: 'public',
      language: 'Français',
      created: '2023-07-22',
      lastActivity: '2024-01-08T08:15:00Z',
      tags: ['Agriculture', 'Sécurité Alimentaire', 'Durabilité', 'Rural'],
      featured: false,
      moderators: ['Food Security Initiative', 'Agri Network', 'Rural Development']
    },
    {
      id: '9',
      name: 'Bailleurs & Partenaires',
      description: 'Espace privé réservé aux bailleurs de fonds et partenaires pour échanger avec les OSC et lancer des appels à projets.',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
      members: 45,
      posts: 23,
      sector: 'Partenariat',
      privacy: 'private',
      language: 'Français',
      created: '2023-08-30',
      lastActivity: '2024-01-07T10:00:00Z',
      tags: ['Bailleurs', 'Financement', 'Partenariat', 'Appels à projets'],
      featured: false,
      moderators: ['Union Européenne', 'Banque Mondiale', 'Fondation Mo Ibrahim']
    }
  ];

  const sectors = [
    { id: 'all', label: 'Tous les groupes', count: groups.length },
    { id: 'Paix & Gouvernance', label: 'Paix & Gouvernance', count: groups.filter(g => g.sector === 'Paix & Gouvernance').length },
    { id: 'Environnement', label: 'Environnement', count: groups.filter(g => g.sector === 'Environnement').length },
    { id: 'Santé', label: 'Santé', count: groups.filter(g => g.sector === 'Santé').length },
    { id: 'Éducation', label: 'Éducation', count: groups.filter(g => g.sector === 'Éducation').length },
    { id: 'Genre & Droits humains', label: 'Genre & Droits', count: groups.filter(g => g.sector === 'Genre & Droits humains').length },
    { id: 'Jeunesse & Innovation', label: 'Innovation', count: groups.filter(g => g.sector === 'Jeunesse & Innovation').length },
    { id: 'Culture & Patrimoine', label: 'Culture', count: groups.filter(g => g.sector === 'Culture & Patrimoine').length },
    { id: 'Agriculture & Sécurité Alimentaire', label: 'Agriculture', count: groups.filter(g => g.sector === 'Agriculture & Sécurité Alimentaire').length }
  ];

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSector = activeTab === 'all' || group.sector === activeTab;
    return matchesSearch && matchesSector;
  });

  const featuredGroups = groups.filter(group => group.featured);

  const formatTime = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diff = now.getTime() - postTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'À l\'instant';
    if (hours < 24) return `Il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Groupes Thématiques</h1>
          <p className="text-gray-600 mb-6">
            Rejoignez des communautés spécialisées pour échanger, collaborer et partager vos expériences
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Groupes</p>
                  <p className="text-2xl font-bold text-gray-900">{groups.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Membres</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {groups.reduce((sum, g) => sum + g.members, 0).toLocaleString()}
                  </p>
                </div>
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Discussions</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {groups.reduce((sum, g) => sum + g.posts, 0)}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Secteurs</p>
                  <p className="text-2xl font-bold text-gray-900">{sectors.length - 1}</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Groups */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Groupes en vedette</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGroups.map((group) => (
              <Card key={group.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-l-orange-500">
                <div className="relative">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <Badge className="bg-orange-500">
                      <Star className="h-3 w-3 mr-1" />
                      Vedette
                    </Badge>
                    <Badge variant="secondary" className="bg-white/90">
                      {group.privacy === 'public' ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                    {group.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {group.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {group.members} membres
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {group.posts} discussions
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {group.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500">
                    Dernière activité : {formatTime(group.lastActivity)}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    Rejoindre le groupe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher des groupes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-9 bg-white border overflow-x-auto">
            {sectors.map((sector) => (
              <TabsTrigger 
                key={sector.id} 
                value={sector.id}
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600 whitespace-nowrap"
              >
                {sector.label} ({sector.count})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group) => (
                <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="relative">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90">
                        {group.privacy === 'public' ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                      {group.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {group.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {group.members} membres
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {group.posts} discussions
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {group.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-xs text-gray-500">
                      Dernière activité : {formatTime(group.lastActivity)}
                    </div>

                    <Button variant="outline" className="w-full">
                      {group.privacy === 'public' ? 'Rejoindre' : 'Demander l\'accès'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {sectors.slice(1).map((sector) => (
            <TabsContent key={sector.id} value={sector.id} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGroups
                  .filter(group => group.sector === sector.id)
                  .map((group) => (
                    <Card key={group.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="relative">
                        <img
                          src={group.image}
                          alt={group.name}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-white/90">
                            {group.privacy === 'public' ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                          {group.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {group.description}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {group.members} membres
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {group.posts} discussions
                          </span>
                        </div>
                        <Button variant="outline" className="w-full">
                          {group.privacy === 'public' ? 'Rejoindre' : 'Demander l\'accès'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Vous voulez créer un nouveau groupe ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Créez votre propre groupe thématique pour rassembler des OSC partageant les mêmes objectifs 
            et faciliter la collaboration autour de votre domaine d'expertise.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">
            <Plus className="h-4 w-4 mr-2" />
            Créer un groupe
          </Button>
        </div>
      </div>
    </Layout>
  );
}
