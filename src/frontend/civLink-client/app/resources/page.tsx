'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Download, FileText, Video, BookOpen, Users, Calendar, Star, ExternalLink, Filter } from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const resources = [
    {
      id: '1',
      title: 'Guide de Gestion de Projet pour OSC',
      type: 'guide',
      category: 'Gestion',
      description: 'Manuel complet pour la planification, exécution et suivi de projets dans les OSC africaines.',
      author: 'CivLink',
      downloads: 1250,
      rating: 4.8,
      language: 'Français',
      size: '2.5 MB',
      format: 'PDF',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      tags: ['Gestion', 'Projet', 'Planification', 'Suivi'],
      featured: true
    },
    {
      id: '2',
      title: 'Formation : Collecte de Fonds Efficace',
      type: 'training',
      category: 'Financement',
      description: 'Module de formation en ligne pour apprendre les techniques de collecte de fonds et de rédaction de propositions.',
      author: 'Fondation Mo Ibrahim',
      downloads: 890,
      rating: 4.9,
      language: 'Français',
      duration: '3h 30min',
      format: 'Vidéo',
      image: 'https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg',
      tags: ['Financement', 'Formation', 'Propositions', 'Collecte'],
      featured: true
    },
    {
      id: '3',
      title: 'Modèles de Rapports d\'Activité',
      type: 'template',
      category: 'Communication',
      description: 'Collection de modèles de rapports pour documenter et communiquer sur les activités de votre OSC.',
      author: 'Union Européenne',
      downloads: 2100,
      rating: 4.7,
      language: 'Multilingue',
      size: '1.2 MB',
      format: 'Word/PDF',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
      tags: ['Rapport', 'Communication', 'Documentation', 'Modèle'],
      featured: false
    },
    {
      id: '4',
      title: 'Webinaire : Gouvernance des OSC',
      type: 'webinar',
      category: 'Gouvernance',
      description: 'Enregistrement du webinaire sur les bonnes pratiques de gouvernance et de transparence.',
      author: 'Transparency International',
      downloads: 650,
      rating: 4.6,
      language: 'Français',
      duration: '1h 45min',
      format: 'Vidéo',
      image: 'https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg',
      tags: ['Gouvernance', 'Transparence', 'Webinaire', 'Bonnes pratiques'],
      featured: false
    },
    {
      id: '5',
      title: 'Kit de Communication Digitale',
      type: 'toolkit',
      category: 'Communication',
      description: 'Ensemble d\'outils et de templates pour améliorer la présence digitale de votre OSC.',
      author: 'Google for Nonprofits',
      downloads: 1800,
      rating: 4.8,
      language: 'Français',
      size: '15 MB',
      format: 'ZIP',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      tags: ['Digital', 'Communication', 'Réseaux sociaux', 'Marketing'],
      featured: true
    },
    {
      id: '6',
      title: 'Guide de Monitoring et Évaluation',
      type: 'guide',
      category: 'Évaluation',
      description: 'Méthodologie complète pour mesurer l\'impact et l\'efficacité des projets d\'OSC.',
      author: 'Banque Mondiale',
      downloads: 1450,
      rating: 4.9,
      language: 'Français',
      size: '3.8 MB',
      format: 'PDF',
      image: 'https://images.pexels.com/photos/6303669/pexels-photo-6303669.jpeg',
      tags: ['M&E', 'Impact', 'Évaluation', 'Méthodologie'],
      featured: false
    },
    {
      id: '7',
      title: 'Formation : Gestion Financière',
      type: 'training',
      category: 'Finance',
      description: 'Cours en ligne sur la gestion financière, la comptabilité et la transparence budgétaire.',
      author: 'PwC Foundation',
      downloads: 980,
      rating: 4.7,
      language: 'Français',
      duration: '4h 15min',
      format: 'Vidéo',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['Finance', 'Comptabilité', 'Budget', 'Transparence'],
      featured: false
    },
    {
      id: '8',
      title: 'Base de Données Bailleurs Africains',
      type: 'database',
      category: 'Financement',
      description: 'Répertoire complet des bailleurs de fonds actifs en Afrique avec leurs critères et procédures.',
      author: 'CivLink',
      downloads: 3200,
      rating: 4.9,
      language: 'Français',
      size: '5.2 MB',
      format: 'Excel/PDF',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Bailleurs', 'Financement', 'Base de données', 'Répertoire'],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes les ressources', count: resources.length },
    { id: 'guide', label: 'Guides', count: resources.filter(r => r.type === 'guide').length },
    { id: 'training', label: 'Formations', count: resources.filter(r => r.type === 'training').length },
    { id: 'template', label: 'Modèles', count: resources.filter(r => r.type === 'template').length },
    { id: 'webinar', label: 'Webinaires', count: resources.filter(r => r.type === 'webinar').length },
    { id: 'toolkit', label: 'Kits d\'outils', count: resources.filter(r => r.type === 'toolkit').length },
    { id: 'database', label: 'Bases de données', count: resources.filter(r => r.type === 'database').length }
  ];

  const typeLabels: Record<string, string> = {
    guide: 'Guide',
    training: 'Formation',
    template: 'Modèle',
    webinar: 'Webinaire',
    toolkit: 'Kit d\'outils',
    database: 'Base de données'
  };

  const typeColors: Record<string, string> = {
    guide: 'bg-blue-100 text-blue-800',
    training: 'bg-green-100 text-green-800',
    template: 'bg-purple-100 text-purple-800',
    webinar: 'bg-orange-100 text-orange-800',
    toolkit: 'bg-pink-100 text-pink-800',
    database: 'bg-indigo-100 text-indigo-800'
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeTab === 'all' || resource.type === activeTab;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ressources & Outils</h1>
          <p className="text-gray-600 mb-6">
            Accédez à une bibliothèque complète de guides, formations et outils pour renforcer les capacités de votre OSC
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Ressources</p>
                  <p className="text-2xl font-bold text-gray-900">{resources.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Téléchargements</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {resources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}
                  </p>
                </div>
                <Download className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Formations</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {resources.filter(r => r.type === 'training').length}
                  </p>
                </div>
                <Video className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Langues</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ressources en vedette</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-l-orange-500">
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-orange-500">
                    <Star className="h-3 w-3 mr-1" />
                    Vedette
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={typeColors[resource.type]}>
                      {typeLabels[resource.type]}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {resource.rating}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {resource.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Par {resource.author}</span>
                    <span>{resource.downloads.toLocaleString()} téléchargements</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
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
              placeholder="Rechercher des ressources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-7 bg-white border">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-600"
              >
                {category.label} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className="relative">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                      {typeLabels[resource.type]}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {resource.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Par {resource.author}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{resource.language}</span>
                      <span>{resource.downloads.toLocaleString()} téléchargements</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources
                  .filter(resource => resource.type === category.id)
                  .map((resource) => (
                    <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                      <div className="relative">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                          {typeLabels[resource.type]}
                        </Badge>
                      </div>
                      <CardHeader className="pb-3">
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {resource.description}
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Par {resource.author}</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500" />
                            {resource.rating}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{resource.language}</span>
                          <span>{resource.downloads.toLocaleString()} téléchargements</span>
                        </div>
                        <Button variant="outline" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
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
          <h2 className="text-2xl font-bold mb-4">Vous avez une ressource à partager ?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Contribuez à la bibliothèque de ressources en partageant vos guides, formations ou outils. 
            Aidez d'autres OSC à se développer et à maximiser leur impact.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-orange-50">
            Partager une ressource
          </Button>
        </div>
      </div>
    </Layout>
  );
}
