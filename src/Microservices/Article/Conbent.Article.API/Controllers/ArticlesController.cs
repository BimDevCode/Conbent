using AutoMapper;
using Conbent.Article.API.Controllers.Contractors;
using Conbent.Article.API.DTOs;
using Conbent.Article.Core.Entities;
using Conbent.Article.Core.Interfaces.Contractors;
using Conbent.Article.Core.Specifications;
using Conbent.CommonInfrastructure.Errors;
using Conbent.CommonInfrastructure.Models;
using Microsoft.AspNetCore.Mvc;

namespace Conbent.Article.API.Controllers;

public class ArticlesController(
    IGenericRepository<ArticleEntity> articlesRepo,
    IGenericRepository<Technology> technologyRepo,
    IGenericRepository<Tag> tagRepo,
    IMapper mapper)
    : BaseApiController
{
    //[Cached(600)]
    [HttpGet]
    public async Task<ActionResult<Pagination<ArticleDto>>> GetArticles(
        [FromQuery] ArticleSpecParams articleParams)
    {
        var spec = new ArticlesWithTechnologySpecification(articleParams);
        var countSpec = new ArticlesWithFiltersForCountSpecification(articleParams);

        var totalItems = await articlesRepo.CountAsync(countSpec);
        var articles = await articlesRepo.ListAsync(spec);

        var data = mapper.Map<IReadOnlyList<ArticleDto>>(articles);

        return Ok(new Pagination<ArticleDto>(articleParams.PageIndex,
            articleParams.PageSize, totalItems, data));
    }

    //[Cached(600)]
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ArticleDto>> GetArticle(int id)
    {
        var spec = new ArticlesWithTechnologySpecification(id);

        var article = await articlesRepo.GetEntityWithSpec(spec);

        if (article == null) return NotFound(new ApiResponse(404));

        return mapper.Map<ArticleEntity, ArticleDto>(article);
    }

    //[Cached(600)]
    [HttpGet("Technologies")]
    public async Task<ActionResult<IReadOnlyList<Technology>>> GetTechnologies()
    {
        return Ok(await technologyRepo.ListAllAsync());
    }

    [HttpGet("Tags")]
    public async Task<ActionResult<IReadOnlyList<Tag>>> GetTags()
    {
        return Ok(await tagRepo.ListAllAsync());
    }
}